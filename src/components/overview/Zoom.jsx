import React from 'react';

const {useState, useEffect} = React;

const Zoom = ({url, updateZoomed, zoomEvent}) => {
  const [top, updateTop] = useState(0);
  const [left, updateLeft] = useState(0);
  const [styling, updateStyling] = useState({});

  const maxWidth = window.innerWidth;
  const maxHeight = window.innerHeight;

  useEffect(() => {
    mouseMove(zoomEvent);
  }, [zoomEvent]);

  const mouseMove = (e) => {
    let scale = 1;
    if (e.target.naturalHeight > maxHeight) {
      scale = maxHeight/e.target.naturalHeight;
    }
    let minWidth = scale * 2.5 * e.target.naturalWidth + 'px';
    let xPerc = e.clientX/maxWidth;
    let yPerc = e.clientY/maxHeight;
    updateStyling({
      minWidth: minWidth,
      left: -xPerc * (scale * 2.5 * e.target.naturalWidth - maxWidth),
      top: -yPerc * (scale * 2.5 * e.target.naturalHeight - maxHeight)
    })
  };


  return (
    <img style={styling} onMouseMove={mouseMove} src={url} onClick={e => {updateZoomed(false)}} className='hidden sm:block z-50 absolute select-none' data-testid="zoom-image"/>
  )
}

export default Zoom;