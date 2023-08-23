import styled from '@emotion/styled';

export const FormLog = styled.form`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 300px;
  text-align: center;
  margin: auto;
`;

export const LabelLog = styled.label`
  font-size: 14px;
  color: #555;
  display: block;
  margin-bottom: 5px;
`;

export const InputLog = styled.input`
  width: 93%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

export const ButtonLog = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
