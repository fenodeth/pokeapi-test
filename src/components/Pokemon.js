import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "../App.css";
// Endpoint
import { getPokemonData, searchPokemon } from "../api/pokeAPI";
// Components
import PokeCard from "./PokeCard";
import CustomSpinner from "./CustomSpinner";
// Util
import { Button, TextField } from "@mui/material";
import { deepOrange } from "@material-ui/core/colors";
import { styled } from "@mui/material/styles";
import { Row, Col } from "react-bootstrap";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(deepOrange["A400"]),
  backgroundColor: deepOrange["A400"],
  "&:hover": {
    backgroundColor: deepOrange[900],
  },
}));

const Pokemon = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  let dataArray = [];

  const getPokemon = async () => {
    for (let i = 1; i <= 48; i++) {
      dataArray.push(await getPokemonData(i));
    }
    setPokemon(dataArray);
    setLoading(false);
  };

  useEffect(() => {
    getPokemon();
  }, []);

  const onSearch = async (data, e) => {
    e?.preventDefault();
    try {
      dataArray.push(await searchPokemon(data?.name));
      setPokemon(dataArray);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const onReload = async (e) => {
    e?.preventDefault();
    try {
      setLoading(true);
      getPokemon();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {loading && <CustomSpinner />}
      {!loading && (
        <>
          <div className="row justify-content-between mt-5 mb-4">
            <form
              className="col align-self-start"
              onSubmit={handleSubmit(onSearch)}
            >
              <TextField
                label="Nombre Pokemon"
                variant="outlined"
                color="warning"
                {...register("name", {
                  required: "Requerido",
                  pattern: {
                    value: /[A-Za-z]{3}/,
                    message: "Ingrese sólo letras",
                  },
                  minLength: {
                    value: 3,
                    message: "Texto demasiado corto",
                  },
                  maxLength: {
                    value: 15,
                    message: "Texto demasiado largo",
                  },
                })}
                inputProps={{ maxLength: 16 }}
                error={!!errors?.name}
                helperText={errors?.name?.message}
              />
              <ColorButton
                variant="contained"
                type="submit"
                style={{ marginTop: 10, marginLeft: 20 }}
                className="jr-btn jr-btn-lg"
              >
                Buscar Pokemon
              </ColorButton>
            </form>
            <div className="d-flex col justify-content-end">
              <ColorButton
                variant="contained"
                onClick={() => {
                  onReload();
                }}
                style={{ marginTop: 10 }}
                className="jr-btn jr-btn-lg"
              >
                Recargar Pokedex
              </ColorButton>
            </div>
          </div>
          <Row>
            {pokemon[0]?.data ? (
              pokemon?.map((p) => (
                <Col key={p.data.name} xs={12} sm={12} md={4} lg={4} xl={4}>
                  <PokeCard pokemon={p?.data} />
                </Col>
              ))
            ) : (
              <p className="fs-5 fw-bold text-danger">
                Error - No se encontraron registros en la búsqueda. Recargue
                Pokedex.
              </p>
            )}
          </Row>
        </>
      )}
    </>
  );
};

export default Pokemon;
