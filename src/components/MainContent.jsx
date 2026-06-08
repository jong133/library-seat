import { useContext } from "react";
import ThemeConext from './ThemeContext'

function MainContent(props) {
    const {theme, toggleTheme} = useContext(ThemeConext);

    return(
        <div style={{
            width: '100vw', height: '100vh', padding: '1.5rm',
            backgroundColor: theme === 'light' ? 'white' : 'black',
            color: theme === 'light' ? 'black' : 'white' 
        }}
        >
            <p>테마 변경이 가능한 웹사이트입니다.</p>
            <button onClick={toggleTheme}>테마 변경</button>

    
        </div>
    );
}

export default MainContent;