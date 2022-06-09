import { Card, Button, Col, CardImg } from "react-bootstrap";
import { useMeals } from "../hooks/useMeals";

const Meal = ({ meal }) => {
  const { handleComidaId, handleModalClick } = useMeals();
  return (
    <Col md={6} lg={3}>
      <Card className="mb-4 justify-center text-center">
        <Card.Img
          variant="top"
          src={meal.strMealThumb}
          alt={`Imagen de ${meal.strMeal}`}
        />

        <div className="mt-2 p-3  text-uppercase ">{meal.strMeal}</div>
      </Card>

      <Card.Body>
        <Card.Title>{meal.strMeal}</Card.Title>
        <Card.Text>Meal</Card.Text>
        <Button
          className="w-100 text-uppercase mt-2 bold"
          variant="success"
          onClick={() => {
            handleModalClick();
            handleComidaId(meal.idMeal);
          }}
        >
          See the recipe
        </Button>
      </Card.Body>
    </Col>
  );
};

export default Meal;
