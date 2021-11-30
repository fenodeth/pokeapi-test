import React from "react";
import { Card } from "react-bootstrap";

const PokeCard = ({ pokemon }) => {
  return (
    <>
      <Card className="my-3 p-3 rounded text-center shadow p-3 mb-2 bg-white rounded">
        <div>
          <Card.Img
            style={{ width: "8rem" }}
            src={pokemon?.sprites?.front_default}
            variant="top"
          />
        </div>
        <div>
          <Card.Body
            className={`${pokemon?.types[0]?.type?.name} rounded text-white`}
          >
            <div>
              <Card.Title as="div">
                <p className="fs-5 fw-bold text-capitalize">
                  #{pokemon?.id} {pokemon?.name}
                </p>
              </Card.Title>
            </div>
          </Card.Body>
        </div>
      </Card>
    </>
  );
};

export default PokeCard;
