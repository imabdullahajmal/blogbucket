import { Button } from "@mui/material";

const MoreArticlesButton = ({ onClick }) => {
  return (
    <div className="flex justify-center my-6">
      <Button variant="contained" color="primary" onClick={onClick}>
        More Articles
      </Button>
    </div>
  );
};

export default MoreArticlesButton;
