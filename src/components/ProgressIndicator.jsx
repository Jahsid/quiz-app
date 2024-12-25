import { Card, CardContent, Chip } from "@mui/material";

const ProgressIndicator = () => {
  return (
    <div className="w-[250px]">
      <Card variant="outlined" className="shadow-lg h-[650px]">
        <CardContent>
          <div className="flex justify-between">
            <p>Question 1/5</p>
            <p>Need Help?</p>
          </div>
          <div className="flex justify-center mt-8">
            <Chip label="1" color="success" className="mr-5" />
            <Chip label="2" color="primary" className="mr-5" />
            <Chip label="3" color="primary" className="mr-5" />
            <Chip label="4" color="primary" className="mr-5" />
            <Chip label="5" color="primary" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProgressIndicator;
