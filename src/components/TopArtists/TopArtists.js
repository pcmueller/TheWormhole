import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { artists } from '../../actions';
import { getTopArtists } from '../../utilities/apiCalls';
import artistImageData from '../../assets/artistsDataset';
import utils from '../../utilities/utils';
import images from '../../utilities/artistImages';

const TopArtists = () => {

  const dispatch = useDispatch();

  const [artistCards, setArtistCards] = useState([]);
  const [imageLinks, setImageLinks] = useState([]);

  const location = useSelector(state => state.location);
  const topArtists = useSelector(state => state.topArtists);

  useEffect(() => {
    fetchArtistsData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchArtistsData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  useEffect(() => {
    if (topArtists.length > 1) {
      findImageLinks();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [topArtists]);


  useEffect(() => {
    if (imageLinks.length > 1) {
      setArtistCards(buildCards());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageLinks]);

  const fetchArtistsData = async () => {
    const apiData = await getTopArtists(location.string);
    if (apiData) {
      const allArtists = apiData.topartists.artist;
      const filtered = filterArtists(allArtists);
      dispatch(artists(filtered));
    }
  }

  const filterArtists = (data) => {
    const topArtists = data.reduce((topTen, artistObj) => {
      if (data.indexOf(artistObj) < 8) {
        topTen.push(artistObj);
      }
      return topTen;
    }, []);
    return topArtists;
  }

  const findImageLinks = () => {
    const links = [];
    topArtists.forEach(topArtist => {
      artistImageData.forEach(artist => {
        if (artist.id === topArtist.mbid) {
          links.push(artist.link);
        }
      })
    });
    setImageLinks(links);
  }

  const buildCards = () => topArtists.map(artist => {

    let index = topArtists.indexOf(artist);
    let nameString = artist.name.replaceAll(' ', '+');

    return (
      <article key={artist.mbid} className='top-artist-card'>
        <p className='top-artist-name'>{artist.name}</p>
        <Link to={`/artist:${nameString}`} id={nameString} className='link-container'>
          <div 
            className='top-artist-image' 
            id={artist.mbid} 
            key={artist.mbid} 
            style={{ backgroundImage: `url(${imageLinks[index] || utils.getRandomElement(images)})`}}>
          </div>
        </Link>
      </article>
    )
  });

  return (
    topArtists.length < 1 ?
      <section className='message-box'>
        <p className='message'>Page Loading</p>
      </section>
      :
      <section className='top-artists-box'>
        <h3>Top Artists</h3>
        <div className='artists-list'>
          {artistCards}
        </div>
      </section>
  )
}

export default TopArtists;
