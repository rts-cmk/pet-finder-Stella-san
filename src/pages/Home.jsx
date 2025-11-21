import { FiHome } from "react-icons/fi";
import { FaRegComment } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
// Filled heart
import { FaHeart } from "react-icons/fa";
<FaHeart />
import { RxPerson } from "react-icons/rx";
import { FiBell } from "react-icons/fi";

import { useLoaderData } from "react-router"


export default function Home() {

    const {pets, user} = useLoaderData()
    console.log(pets);


    return (
        <>
            <header>
                <section className='header-profile-icon'>
                    <a href=""><img src={user.image} alt="profile" /></a>
                    <h2></h2>
                    <FiBell />
                </section>


                <div className='pets-categories'>
                    <button><a href="#">Cats</a></button>
                    <button><a href="#">Dogs</a></button>
                    <button><a href="#">Birds</a></button>
                    <button><a href="#">Other</a></button>
                </div>

            </header>

            <main>
                {pets.map(pet =>
                    <section className='pet-section'>
                        <img src={pet.image} alt="pet image" />
                        <div className="pet-section-indhold">
                            <div className="pet-section-top">
                                <h2 className='pet-name'>{pet.breed}</h2>
                                <div className='favorite'>
                                    <FaRegHeart />
                                </div>
                            </div>
                            <p className='location'>{pet.location}</p>
                            <p className='short-decsiption'>{pet.short_description}</p>
                        </div>
                    </section>
                )}

            </main>

            <nav>
                <ul>
                    <li className='home'><FiHome /></li>
                    <li className='comment'><FaRegComment /></li>
                    <li className='favorite'><FaRegHeart /></li>
                    <li className='profile'><RxPerson /></li>
                </ul>
            </nav>


        </>
    )

}




