import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe('Pruebas en <GifGridItem/>', () => {
    const title = "Gif de test";
    const url = "https://localhost/algo.jpg"
    const wrapper = shallow(<GifGridItem title={title} url={url}/>)
    test('debe de mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('debe tener el mismo título', () => {
        const p = wrapper.find('p');

        expect(p.text().trim()).toBe(title);
    })

    test('debe tener la imagen igual al url de prop', () => {
        const img = wrapper.find('img');

        // console.log(img.props().src)
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);

    })

    test('debe tener animate__fadeIn', () => {
        const div = wrapper.find('div');
        console.log(div.prop('className').split(' ')[2])
        expect(div.prop('className').includes('animate__fadeIn')).toBe(true)
    })

    // test('debe tener el mismo alt', () => {
    //     const img = wrapper.find('img ');

    //     expect(p.text().trim()).toBe(title);
    // })
})