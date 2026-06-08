import NumberList from './components/NumberList.jsx';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <NumberList numbers={ [1,2,3,4,5]}/>
    </React.StrictMode>
)