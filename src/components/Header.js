import React from 'react'

const Header = props => (
  <header className='top'>
    <h1>
      Catch
      <span className='ofThe'>
          <span className='of'>Of</span>
          <span className='the'>the</span>
        </span>
      Day
    </h1>
    <h3 className='tagline'>
      <span>{props.tagLine} {props.age}</span>
    </h3>
  </header>
)

// class Header extends React.Component {
//   render() {
//     return (
//       <header className='top'>
//         <h1>
//           Catch
//           <span className='ofThe'>
//             <span className='of'>Of</span>
//             <span className='the'>the</span>
//           </span>
//           Day
//         </h1>
//         <h3 className='tagline'>
//           <span>{ this.props.tagLine }</span>
//         </h3>
//       </header>
//     )
//   }
// }

export default Header