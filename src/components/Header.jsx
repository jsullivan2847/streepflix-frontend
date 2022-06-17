import Nav from './Nav'
import Video from './Video'

const Header = ({trailer}) => {
    const window = () => {
        return <div>
            <Video/>
        </div>
    }
    return(
        <div className="header">
            <Nav/>
        </div>
    )
}

export default Header;