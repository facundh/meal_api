import { Image, Modal } from "react-bootstrap";
import { useMeals } from "../hooks/useMeals"

const ModalMeal = () => {
    const {handleModalClick, modal, receta, cargando} = useMeals();
    
    const showIngredientes = () => {
        let ingredientes = [];

        for(let i = 1; i < 14; i+=1){
            if(receta[`strIngredient${i}`]){
                ingredientes.push(
                    <li>{receta[`strIngredient${i}`]}</li>
                )
            }
        }
        return ingredientes
    };

    return !cargando && (
        <Modal show={modal} onHide={handleModalClick}>
            <Image src={receta.strMealThumb} alt={`Imagen de ${receta.strMealThumb}`} />
            <Modal.Header>
                <Modal.Title>{receta.strMeal}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="p-3">
                    <h2 className="text-center mb-2">Instructions</h2>
                    {receta.strInstructions}
                    <h2 className="text-center">Ingredients</h2>
                    {showIngredientes()}
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default ModalMeal;