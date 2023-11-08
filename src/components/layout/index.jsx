import React from 'react';

import profileImg from '../../images/AkdereUlu.jpg';

const classes = {
  wrapper: 'p-8 relative max-w-screen-xl xs:p-24',
  outerWrapper: 'relative',
  svg: 'hidden fixed transform right-0 top-5 z-0 xl:block',
};

const Layout = ({ children }) => {
  return (
    <div
      className={classes.outerWrapper}
      // style={{
      //   backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(${profileImg})`,
      //   backgroundSize: 'cover', // Cover the entire view of the box
      //   backgroundRepeat: 'no-repeat', // Ensure the image doesn't repeat
      //   backgroundPosition: 'center', // Center the background image
      // }}
    >
      <div className={classes.wrapper}>{children}</div>
    </div>
  );
};

export default Layout;
