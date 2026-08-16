import React, { useState, useEffect } from "react";
import { 
  Stack, Paper, Button, Dialog, DialogTitle, 
  DialogContent, TextField, DialogActions, IconButton 
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { DataGrid } from "@mui/x-data-grid";
import { userService } from "../../../services/userService";

export default function Website() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({ firstName: "", lastName: "", age: "" });

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const data = await userService.getUsers();
      setRows(data);
    } catch (err) {
      console.error("讀取資料失敗:", err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleAddUser = async () => {
    try {
      await userService.createUser({
        ...formData,
        age: formData.age ? Number(formData.age) : null,
      });
      fetchUsers();
      setOpen(false);
      setFormData({ firstName: "", lastName: "", age: "" });
    } catch (err) {
      console.error("新增失敗:", err.message);
    }
  };

  const handleDeleteUser = async (id) => {
    if (!window.confirm("確定要刪除這筆資料嗎？")) return;

    try {
      await userService.deleteUser(id);
      setRows((prevRows) => prevRows.filter((row) => row._id !== id));
    } catch (err) {
      console.error("刪除失敗:", err.message);
    }
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    { field: "firstName", headerName: "First name", width: 130, editable: true },
    { field: "lastName", headerName: "Last name", width: 130, editable: true },
    { field: "age", headerName: "Age", type: "number", width: 90, editable: true },
    {
      field: "fullName",
      headerName: "Full name",
      width: 160,
      valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
    },
    {
      field: "actions",
      headerName: "操作",
      width: 100,
      sortable: false,
      renderCell: (params) => (
        <IconButton 
          color="error" 
          onClick={() => handleDeleteUser(params.row._id)}
        >
          <DeleteIcon />
        </IconButton>
      ),
    },
  ];

  return (
    <Stack sx={{ background: "#F6F4F0", minHeight: "100vh", padding: "2rem", alignItems: "center" }}>
      <Stack sx={{ width: "100%", maxWidth: "1080px" }} spacing={2}>
        <Stack direction="row" justifyContent="flex-end">
          <Button 
            variant="contained" 
            startIcon={<AddIcon />} 
            onClick={() => setOpen(true)}
          >
            新增資料
          </Button>
        </Stack>

        <Paper sx={{ height: 450, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            loading={loading}
            getRowId={(row) => row._id}
            pageSizeOptions={[5, 10]}
            initialState={{ pagination: { paginationModel: { page: 0, pageSize: 5 } } }}
            checkboxSelection
            sx={{ border: 0 }}
          />
        </Paper>
      </Stack>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>新增用戶</DialogTitle>
        <DialogContent>
          <Stack spacing={2} sx={{ mt: 1, minWidth: 300 }}>
            <TextField
              label="First Name"
              fullWidth
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            />
            <TextField
              label="Last Name"
              fullWidth
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            />
            <TextField
              label="Age"
              type="number"
              fullWidth
              value={formData.age}
              onChange={(e) => setFormData({ ...formData, age: e.target.value })}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>取消</Button>
          <Button onClick={handleAddUser} variant="contained">確定新增</Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
}