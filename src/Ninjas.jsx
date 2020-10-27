
function Ninjas(props) {
    const ninjaList = props.ninjas.map(ninja => {
        return (
            <div key={ninja.id} className="ninja">
                    <div>Name: {ninja.name}</div>
                    <div>Age: {ninja.age}</div>
                    <div>Belt: {ninja.belt}</div>
            </div>
        )
    })

return <div className="ninjaList">{ninjaList}</div>
}

export default Ninjas