import { useEffect, useState } from "react";
import { Aeroporto } from "../model/Aeroporto";
import { buscarAeroportos, deleteAeroporto } from "../services/aeroportos";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import "./aeroportos.css";

export function Aeroportos() {
  const [aeroportos, setaeroportos] = useState<any[]>([]);

  const loadData = async () => {
    const aeroportos: Aeroporto[] = await buscarAeroportos();
    setaeroportos(aeroportos);
  };

  useEffect(() => {
    loadData();
  }, []);

  const onClickDeleteAeroporto = (id: number) => {
    deleteAeroporto(id).then(() => loadData());
  };

  const columns: GridColDef[] = [
    { field: "aeroporto.codigo", headerName: "ID", width: 90 },
    {
      field: "aeroporto.nome",
      headerName: "Nome",
      width: 150,
    },
    {
      field: "aeroporto.capacidade",
      headerName: "Capacidade",
      type: "number",
      width: 150,
    },
    {
      field: "",
      headerName: "Ações",
      renderCell: (params) => {
        return (
          <div>
            <a href={`/aeroportos/${params.row.codigo}`}>Ver</a>
            <button
              onClick={() => onClickDeleteAeroporto(params.row.codigo || 0)}
            >
              Delete
            </button>
          </div>
        );
      },
    },
  ];
  return (
    <div>
      <span>Tela Aeroportos</span>
      <a href="/aeroportos-novo"> Criar Aeroporto</a>
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={aeroportos}
          columns={columns}
          getRowId={(aeroportos) => aeroportos.codigo}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
        />
      </Box>
    </div>
  );
}
