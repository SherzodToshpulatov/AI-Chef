
import chefIcon from '../assets/chef-icon.png'

export default function Header(){
    return(
        <header className='header'>
            <img src={chefIcon} className='logo' alt="chef-icon" />
            <h1>AI Chef</h1>
        </header>
    )
}