import useAuth from '../../hooks/useAuth'
const Header = () => {
    const { isLoading } = useAuth();
    console.log(isLoading)
    return (
        <div>
            <h1>Hijllsjdflksdjf</h1>
        </div>
    );
};

export default Header;