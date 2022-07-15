

const Loader = ({ item }) => {
    return (
        <div className={
            "pack-of-loaders__loader " + (item[2] ? item[2] : "")}
        >
            <div className={"pack-of-loaders__" + item[0]}>
                {item[1]}
            </div>
        </div >
    )
}

export default Loader;