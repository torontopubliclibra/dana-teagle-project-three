// import styles
import './Card.css';

// import state functions
import { useState, useRef, useEffect } from 'react';

// import transition hook
import { CSSTransition } from 'react-transition-group';

// ComputerCard component (passed props.card and props.displayStats from Game component)
const ComputerCard = (props) => {

    // initial stateful variable and ref
    const [ flipIn, setFlipIn ] = useState(false);
    const nodeRef = useRef(null);

    // initial card value variables
    let name = "";
    let img = "";
    let alt = "";
    let url = "";
    let aka = "";
    let int = 0;
    let str = 0;
    let spd = 0;
    let dur = 0;
    let fig = 0;
    let color = `#000`;

    // if there is a card
    if(props.card){

        // populate the known variables with the data
        name = props.card.data.name;
        img = props.card.data.img;
        alt = `Illustration of ` + props.card.data.name;
        url = props.card.data.url;
        int = props.card.data.int;
        str = props.card.data.str;
        spd = props.card.data.spd;
        dur = props.card.data.dur;
        fig = props.card.data.fig;
        color = props.card.data.color;

        // if there is a pseudonym
        if (props.card.data.aka){

            // populate that variable as well
            aka = `(` + props.card.data.aka + `)`;
        }
    }

    // set the card styles to have the character's given colour
    let cardStyles = {
        backgroundColor: color,
        opacity: 0.9
    }

    // render side effects when props.card changes
    useEffect(() => {

        // set flip in animation state to true
        setFlipIn(true);

        // after 1 second
        setTimeout(() => {

            // set flip in animation state to false
            setFlipIn(false);

        }, 1000)

    }, [props.card])
    
    // ComputerCard component return
    return (

        // css transition hook
        <CSSTransition
            in={flipIn}
            nodeRef={nodeRef}
            timeout={1000}
            classNames="flip"
        >

            {/* card container */}
            <div className="computerCard">

                {/* animated card */}
                <div className="innerCard" ref={nodeRef}>

                    {/* card content */}
                    <div className="cardFront">

                        <div className="cardTitle">
                            <p style= {cardStyles} ><a href={url} target="_blank" rel="noreferrer">{name}</a><br/>
                            {
                                // if there is a pseudonym
                                aka

                                // display it
                                ? aka
                                : null
                            }
                            </p>
                        </div> {/* .cardTitle end */}

                        <img src={img} alt={alt}/>

                        {
                            // if the player isn't making a choice
                            props.displayStats

                            // display the stats
                            ? <div className="cardStats">
                                <ul className="stats" style= {cardStyles} >
                                    <li>Intelligence: {int}</li>
                                    <li>Strength: {str}</li>
                                    <li>Speed: {spd}</li>
                                    <li>Durability: {dur}</li>
                                    <li>Fighting: {fig}</li>
                                </ul>
                            </div> // .cardStats end

                            // else don't
                            : null
                        }
                    </div>

                    {/* card reverse */}
                    <div className="cardBack">
                        <img className="cardLogo" src="./mobile-logo.png" alt="Superhero Showdown Logo" />
                    </div>

                </div>

            </div>
        </CSSTransition>

    )
}

// export ComputerCard
export default ComputerCard;