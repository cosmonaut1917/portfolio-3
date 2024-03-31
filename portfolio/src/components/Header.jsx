import { Link } from 'react-router-dom';

const Header = () => {
    const styles = {
        header: {
            backgroundColor: '#1a1a1a',
            color: 'white',
            padding: '10px 15px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: "2em 0",
            width: '90vw',
            borderRadius: "10px",
        },
        nav: {
            display: 'flex',
            gap: 15,
        },
        ul: {
            display: 'flex',
            listStyle: 'none',
        },
        li: {
            marginLeft: 10,
        },
        a: {
            color: 'white',
            textDecoration: 'none',
        },
    };
    return (
        <header style={styles.header}>

            <h1>My Portfolio</h1>
            <nav>
                <ul style={styles.ul}>
                    <li style={styles.li}>
                        <Link to="/">Home</Link>
                    </li>
                    <li style={styles.li}>
                        <Link to="/About">About</Link>
                    </li>
                    <li style={styles.li}>
                        <Link to="/Contact">Contact</Link>
                    </li>
                    
                </ul>
            </nav>
        </header>
    );
}
export default Header;