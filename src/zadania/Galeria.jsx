import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import { Image } from "../components/Image";
import { useState } from "react";

export const Galeria = () => {
    const [filters, setFilters] = useState({
        krajobraz: true,
        portret: true,
    });

    const filtersHandler = (e) => {
        const { id, checked } = e.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [id]: checked,
        }));
    };

    const images = [
        {
            img: img1,
            desc: "obraz 1",
            category: "krajobraz",
        },
        {
            img: img2,
            desc: "obraz 2",
            category: "krajobraz",
        },
        {
            img: img3,
            desc: "obraz 3",
            category: "portret",
        },
        {
            img: img4,
            desc: "obraz 4",
            category: "portret",
        },
    ];

    const activeFilters = Object.keys(filters).filter((key) => filters[key]);

    return (
        <div>
            <div className="filter-group">
                <div>
                    <input
                        type="checkbox"
                        id="krajobraz"
                        onChange={filtersHandler}
                        checked={filters.krajobraz}
                    />
                    <label htmlFor="krajobraz">Krajobrazy</label>
                </div>
                <div>
                    <input
                        type="checkbox"
                        id="portret"
                        onChange={filtersHandler}
                        checked={filters.portret}
                    />
                    <label htmlFor="portret">Portrety</label>
                </div>
            </div>
            {images
                .filter((item) => activeFilters.includes(item.category))
                .map((item, index) => (
                    <Image src={item.img} alt={item.desc} key={index} />
                ))}
        </div>
    );
};
