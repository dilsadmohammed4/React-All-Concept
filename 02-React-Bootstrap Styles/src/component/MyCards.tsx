import React from 'react'
import './MyCards.css'

interface IProps {
    imgSrc: string,
    heading: string
}

const MyCards: React.FC<IProps> = (props) => {
    return (
        <>
            <div className="card mt-3 shadow-lg">
                <img src={props.imgSrc}/>
                <div className="card-body">
                    <div className="h3">{props.heading}</div>
                    <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi blanditiis dolore enim esse est illo iure maiores nesciunt nihil, nostrum numquam officia quae repellendus rerum tempore vel voluptate. Ab?</span>
                    </p>
                </div>
            </div>
        </>
    )
}

export default MyCards


