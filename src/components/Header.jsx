import profile from '../assets/images/profile.png'
const Header = () => {
    return (
        <header className="mt-10 flex justify-between items-center">
            <h2 className="text-3xl md:text-4xl font-bold">Knowledge Cafe</h2>
            <div>
                <img className="h-14 w-14 rounded-full" src={profile} alt="" />
            </div>
        </header>
    );
};

export default Header;