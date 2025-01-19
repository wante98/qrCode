import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Box,
  Paper,
} from "@mui/material";
import { QRCodeCanvas } from "qrcode.react";

function App() {
  const [qrType, setQrType] = useState("url");
  const [inputValue, setInputValue] = useState("");
  const [qrValue, setQrValue] = useState("");

  const handleGenerate = () => {
    setQrValue(inputValue);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h5" align="center" gutterBottom>
          QR碼產生器
        </Typography>

        {/* QR Code 類型選擇 */}
        <FormControl fullWidth margin="normal">
          <InputLabel>選擇QR碼類別</InputLabel>
          <Select
            value={qrType}
            label="選擇QR碼類別"
            onChange={(e) => setQrType(e.target.value)}
          >
            <MenuItem value="url">網址</MenuItem>
            <MenuItem value="text">文字</MenuItem>
          </Select>
        </FormControl>

        {/* 輸入內容 */}
        <TextField
          fullWidth
          label={qrType === "url" ? "網址" : "內容"}
          placeholder={
            qrType === "url" ? "請在網址前加上 https://" : "請輸入內容"
          }
          margin="normal"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        {/* QR Code 顯示區域 */}
        <Box textAlign="center" mt={3}>
          {qrValue && (
            <QRCodeCanvas value={qrValue} size={200} />
          )}
        </Box>

        {/* 產生按鈕 */}
        <Box textAlign="center" mt={2}>
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#1976d2",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
            onClick={handleGenerate}
          >
            產生 QR 碼
          </button>
        </Box>
      </Paper>
    </Container>
  );
}

export default App;
