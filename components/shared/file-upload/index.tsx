import { CSSProperties, FC, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Box, Typography } from '@mui/material';

const thumbsContainer: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16,
};

const thumb: CSSProperties = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: 'border-box',
};

const thumbInner: CSSProperties = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden',
};

const img: CSSProperties = {
  display: 'block',
  width: 'auto',
  height: '100%',
};

interface FileWithPreview extends File {
  preview: string;
}

const FileUpload: FC = () => {
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': [],
    },
    onDrop: (acceptedFiles: File[]) => {
      setFiles(
        acceptedFiles.map((file: File) => {
          const fileWithPreview = Object.assign(file, {
            preview: URL.createObjectURL(file),
          });

          return fileWithPreview as FileWithPreview;
        }),
      );
    },
  });

  useEffect((): (() => void) => {
    return () => files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);

  const thumbs = files.map((file: FileWithPreview) => (
    <Box style={thumb} key={file.name}>
      <Box style={thumbInner}>
        <img
          src={file.preview}
          style={img}
          onLoad={(): void => {
            URL.revokeObjectURL(file.preview);
          }}
          alt='img-preview'
        />
      </Box>
    </Box>
  ));

  return (
    <>
      <Box
        {...getRootProps({ className: 'dropzone' })}
        sx={{ border: '1px solid #CBCBCB', py: 2, px: 1.5, borderRadius: 1.5, cursor: 'pointer' }}
      >
        <input {...getInputProps()} />
        <Typography variant='body1'>📎 Upload profile picture </Typography>
      </Box>
      <Box style={thumbsContainer}>{thumbs}</Box>
    </>
  );
};

export default FileUpload;
