import Stream from './presenter';
import { shallow } from 'enzyme';
import { expect } from 'chai';

describe('Stream', () => {
    const props = {
        tracks: [{ title: 'x' }, { title: 'y' }],
    };

    it('shows two elements', () => {
        const element = shallow(<Stream {...props} />);

        expect(element.find('.track')).to.have.length(2);
    });
});