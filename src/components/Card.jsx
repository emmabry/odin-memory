/* eslint-disable react/prop-types */
export default function Cards( { item } ) {
    return (
                <>
                    <img src={item.image} alt={item.name} />
                    <h3>{item.name}</h3>
                    <p>{item.type}</p>
                </>
    );
}       