import { shallow } from 'enzyme';
import { GifExpertApp } from '../GifExpertApp';


describe('Pruebas den GifExpertApp', () => {
    test('Debería hacer match con el snapshot', () => {
        const wrapper = shallow(<GifExpertApp />)
        expect(wrapper).toMatchSnapshot()
    })
    test('Debería mostarse un arreeglo de categorías', () => {
        const categories = ['One Punch Man', 'Dragon Ball'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories} />)
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('GiftGrid').length).toBe(categories.length)
    })
})