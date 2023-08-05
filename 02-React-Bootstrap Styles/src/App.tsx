import React from 'react';
import NavBar from "./layout/NavBar";
import MyCards from "./component/MyCards";
import CardImage1 from './asset/image/dubai.jpg'
import CardImage2 from './asset/image/bali.jpg'
import CardImage3 from './asset/image/london.jpg'
import CardImage4 from './asset/image/rome.jpg'

const App: React.FC = () => {
    return (
        <>
            <NavBar heading={'Bootstrap Demo in React'} color={'bg-primary'}/>
            <div className='container'>
                <div className="row">
                    <div className="col-sm-3">
                        <MyCards imgSrc={CardImage1} heading={'Dubai'}/>
                    </div>
                    <div className="col-sm-3">
                        <MyCards imgSrc={CardImage2} heading={'Bali'}/>
                    </div>
                    <div className="col-sm-3">
                        <MyCards imgSrc={CardImage3} heading={'London'}/>
                    </div>
                    <div className="col-sm-3">
                        <MyCards imgSrc={CardImage4} heading={'Rome'}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
