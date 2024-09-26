import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  max-width: 400px;
  margin: 20px auto;
`;

const PersonalInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  background-color: #f5f5f5;
`;

const Avatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 15px;
`;

const Info = styled.div`
  flex-grow: 1;
`;

const Name = styled.h2`
  font-size: 18px;
  margin: 0;
`;

const Position = styled.p`
  font-size: 14px;
  margin: 0;
  color: #666;
`;

const Icons = styled.div`
  display: flex;
  gap: 10px;
`;

const Icon = styled.span`
  cursor: pointer;
  font-size: 20px;
`;

const TaskTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  padding: 15px;
`;

const TableHeader = styled.th`
  text-align: left;
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const TableRow = styled.tr`
  &:hover {
    background-color: #f0f0f0;
  }
`;

const TableData = styled.td`
  padding: 10px;
`;

const Checkbox = styled.input`
  cursor: pointer;
`;

function TaskCard() {
  const tasks = [
    { id: 1, name: "Revisar relatório", completed: true },
    { id: 2, name: "Preparar apresentação", completed: false },
    { id: 3, name: "Atualizar sistema", completed: false },
  ];

  return (
    <Card>
      <PersonalInfo>
        <Avatar src="https://via.placeholder.com/60" alt="Employee" />
        <Info>
          <Name>João Silva</Name>
          <Position>Desenvolvedor Frontend</Position>
        </Info>
        <Icons>
          <Icon>✏️</Icon>
          <Icon>❌</Icon>
        </Icons>
      </PersonalInfo>
      <TaskTable>
        <thead>
          <tr>
            <TableHeader>Concluída</TableHeader>
            <TableHeader>Tarefa</TableHeader>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <TableRow key={task.id}>
              <TableData>
                <Checkbox type="checkbox" checked={task.completed} readOnly />
              </TableData>
              <TableData>{task.name}</TableData>
            </TableRow>
          ))}
        </tbody>
      </TaskTable>
    </Card>
  );
}

export default TaskCard;
