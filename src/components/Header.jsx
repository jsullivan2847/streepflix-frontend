import Nav from './Nav'
import Video from './Video'

const Header = ({trailer}) => {
    
    return(
        <div className="header">
            {trailer && <div>
            <Video trailer={trailer}/>
        </div>}
        </div>
    )
}

export default Header;