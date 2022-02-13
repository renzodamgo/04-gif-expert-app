import { GiftGrid } from "../../components/GiftGrid";
import { shallow } from 'enzyme';
import { useFetchGifs } from "../../hooks/useFetchGifs";
import '@testing-library/jest-dom';
jest.mock("../../hooks/useFetchGifs");

describe('pruebas en el GiftGrid', () => {

    const category = 'Digimon'
    test('debe mostraste correctamente', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })

        const wrapper = shallow(<GiftGrid category={category} />)
        expect(wrapper).toMatchSnapshot()
    })
    test('debe mostrar items cuendo se cargan imágenes', () => {

        const imgs = [{
            id: 'ABC',
            url: 'https://localhost:3000/cualquier/cosa',
            title:'Caulquiera'
        },
            {
                id: 'ESS',
                url: 'https://localhost:3000/cualquier/cosa',
                title: 'Otra imagen'
            }]
        useFetchGifs.mockReturnValue({
            data: imgs,
            loading: false
        })
        const wrapper = shallow(<GiftGrid category={category} />)
        expect(wrapper.find('p').exists()).toBe(false)
        // expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('GifGridItem').length).toBe(imgs.length)
    })
})