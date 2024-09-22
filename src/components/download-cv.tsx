import { Button } from "./ui/button";

const DownloadCV = () => {
  const download = () => {
    window.open(
      "https://firebasestorage.googleapis.com/v0/b/portfolio-3b344.appspot.com/o/YangShi-Resume.docx?alt=media&token=7509fea1-6819-46a4-a8bb-e72354851a03"
    );
  };

  return <Button onClick={() => download()}>Download</Button>;
};

export default DownloadCV;
