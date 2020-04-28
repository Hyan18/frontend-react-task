import React from 'react'
import { shallow } from 'enzyme'
import Carousel from './Carousel'
import axios from 'axios'

jest.mock('axios');

axios.get.mockImplementation(() => {
    return Promise.resolve({
      data: { Details:
          [{
            Title: "title_1",
            Subtitle: "subtitle_1",
            ImageUrl: "url_1"
          },
          {
            Title: "title_2",
            Subtitle: "subtitle_2",
            ImageUrl: "url_2"
          },
          {
            Title: "title_3",
            Subtitle: "subtitle_3",
            ImageUrl: "url_3"
          }]
        }
    })
  })

  describe('Carousel', () => {
    let wrapper
  
    beforeEach(() => {
      wrapper = shallow(<Carousel />)
    })
  
    afterEach(() => {
      jest.clearAllMocks()
    })

    it('should render a <div />', () => {
        expect(wrapper.find('.carousel-div')).toBeDefined()
        expect(wrapper.find('.carousel-div').length).toEqual(1)
    })

    describe('componentDidMount', () => {
        it('should request the data from the REST endpoint', () => {
          expect(axios.get.mock.calls[0][0]).toEqual('https://interview-assessment.api.avamae.co.uk/api/v1/home/banner-details')
        })
    })
})
