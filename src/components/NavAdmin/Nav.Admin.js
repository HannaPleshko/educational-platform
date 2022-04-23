import ItemNavAdmin from './ItemNavAdmin';

const NavAdmin = ({ data, setCurrentItem }) => {

    return (
        <ul>
            {data.map((item, index) => (
                <ItemNavAdmin key={index} item={item} setCurrentItem={setCurrentItem} {...item} />
            ))}
        </ul>
    );
};

export default NavAdmin;
