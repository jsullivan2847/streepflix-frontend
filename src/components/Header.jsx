import Nav from './Nav'
import Video from './Video'

const Header = ({trailer, user}) => {

    
    return(
        <div className="header">
            <Nav user={user}/>
            {trailer && <div>
            <Video trailer={trailer}/>
        </div>}
        </div>
    )
}

export default Header;