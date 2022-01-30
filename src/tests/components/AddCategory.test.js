import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en <Add Category>/', () => {

    const setCategories = jest.fn()
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    // Para borrar todas las iteracciones después de cada prueba
    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);

    })

    test('Debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola mundo'
        input.simulate('change', { target: { value } })
        const text = wrapper.find('p').text().trim()
        expect(text).toBe(value)
    })

    test('No debe de postear información on submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault() { } });

        expect(setCategories).not.toHaveBeenCalled();
    })

    test('Debe llamar el setCategories y limipiar la caja de texto', () => {
        const input = wrapper.find('input')
        const value = 'Test input'
        input.simulate('change', { target: { value } })
        wrapper.find('form').simulate('submit', { preventDefault() { } });
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

        const newInput = wrapper.find('input').prop('value')
        expect(newInput).toBe('')



    })
})
