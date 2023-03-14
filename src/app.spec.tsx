import Enzyme, { mount } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import { App } from './App';

Enzyme.configure({adapter: new Adapter()});
describe('My first test', () => {
    it('test', () => {
        const component = mount(<App />);
        expect(component).toMatchSnapshot();
        expect(Math.max(1, 5, 10)).toBe(10);
    })
});