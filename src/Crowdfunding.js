import { NavbarBottom } from './NavbarBottom';
import { Link } from 'react-router-dom';

import { Crowdfundingcampaign } from './Crowdfundingcampaign';

import Spielplatz from './img/playground_petition.jpg';
import Radweg from './img/bikeway.jpg';
import Bunker from './img/bunker.jpg';
import Header from './components/Header';
import { useDispatch, useSelector } from 'react-redux';
export const Crowdfunding = () => {
  const { locationName, lat, long } = useSelector((state) => state.Geo);

  return (
    <div>
      <div id='header'>
        <p className='location' id='location'>
          <Link to='/karte'>
            {locationName}{' '}
            <img id='filter' src={require('./img/funnel-fill.svg')} />{' '}
          </Link>{' '}
        </p>

        <p className='menu1 small-headlines'>
          {' '}
          <Link to='/'>Anträge</Link> |{' '}
          <Link to='/crowdfunding' className='strong'>
            Crowdfunding
          </Link>
        </p>
      </div>

      <div className='campaigns no-data'>
        In diesem Gebiet befinden sich noch keine Crowdfundingkampagnen. Wir
        sind aber bereits im Dialog mit der öffentlichen Verwaltung. Gerne
        können Sie diese auch persönlich kontaktieren.
      </div>

      <NavbarBottom
        classstart='under-navitem-selected'
        classsearch='under-navitem-unselected'
        classactivity='under-navitem-unselected'
        classprofile='under-navitem-unselected'
      />
    </div>
  );
};
