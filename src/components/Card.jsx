/* eslint-disable react/prop-types */
export default function Cards( { item } ) {
    return (
                <>
                    <h2>{item.name}</h2>
                    <img src={item.image} alt={item.name} />
                    <p>{item.type}</p>
                </>
    );
}       