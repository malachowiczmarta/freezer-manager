import React, {useState} from "react";
import Dropdown from "../../../../ui/dropdown/Dropdown";

const Category = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenDd = () => {
        setIsOpen(!isOpen)
    };

    return (
        <div>
            <Dropdown label="Fresh meat" variant="category" open={isOpen} onClick={handleOpenDd}>
                <div>
                    <div>
                        <p>Chicken</p>
                        <time>12.03.2021</time>
                        <time>12.05.2021</time>
                        <button>delete</button>
                    </div>

                    <div>
                        <p>Chicken</p>
                        <p>12.03.2021</p>
                        <button>delete</button>
                    </div>
                </div>
            </Dropdown>
        </div>
    )
}

export default Category;