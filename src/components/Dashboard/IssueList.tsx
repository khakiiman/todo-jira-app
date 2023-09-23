/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { users } from '../../data/issueData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckSquare,
  faBook,
  faExclamationCircle,
  faUpLong,
  faDownLong,
} from '@fortawesome/free-solid-svg-icons';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { sortDragData } from '../../store/kanbanSlice';
import ModalComponent from '../Modal';

const IssueStatusCopy = {
  BACKLOG: 'Backlog',
  SELECTED: 'development',
  INPROGRESS: 'In progress',
  DONE: 'Done',
};

interface ModalData {
  id: string;
  isModelOpen: boolean;
}

function IssueList() {
  const [modelData, setModalData] = useState<ModalData>({
    id: '',
    isModelOpen: false,
  });
  const dispatch = useDispatch();

  const listOfIssues = useSelector((state: any) => {
    return state.kanban.data.filter((issue: any) =>
      issue.title.toLowerCase().includes(state.kanban.searchTerm.toLowerCase())
    );
  });

  const renderIssueUsers = (issueList: any) => {
    if (!issueList.userIds) {
      return;
    }
    return users.map(
      (user) =>
        issueList.userIds.includes(user.id) && (
          <img
            className='flex w-8 rounded-full border border-slate-900 dark:border dark:border-slate-100'
            src={user.avatarUrl}
            alt=''
          />
        )
    );
  };

  const handleOnDragEnd = (result: any) => {
    dispatch(
      sortDragData({
        id: Number(result.draggableId),
        status: result.destination.droppableId,
      })
    );
  };

  return (
    <>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <div className='flex w-full'>
          {Object.keys(IssueStatusCopy).map((issue) => (
            <Droppable droppableId={`${issue}`} key={issue}>
              {(provided: any) => (
                <div
                  className='w-3/4 bg-gray-700 m-[1.5rem] p-3 rounded-lg'
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  <h5 className='text-slate-100 dark:text-slate-100 font-bold tracking-wide mb-4 text-center uppercase'>
                    {IssueStatusCopy[issue]}
                  </h5>

                  {listOfIssues.map(
                    (issueList: any) =>
                      issueList.status
                        .toLowerCase()
                        .includes(issue.toLowerCase()) && (
                        <Draggable
                          key={issueList.id}
                          draggableId={issueList.id.toString()}
                          index={Number(issueList.priority)}
                        >
                          {(provided: any) => (
                            <div
                              className='flex flex-col bg-slate-100 dark:bg-slate-800 p-4 rounded-lg mb-[0.5rem]'
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              ref={provided.innerRef}
                              onClick={() => {
                                setModalData({
                                  id: issueList.id.toString(),
                                  isModelOpen: true,
                                });
                              }}
                            >
                              <h5 className='pb-4 text-slate-900 dark:text-slate-100'>
                                {issueList.title}
                              </h5>
                              <div className='flex items-center justify-between gap-1'>
                                <div className='flex gap-2'>
                                  {issueList.type?.toLowerCase() === 'task' && (
                                    <FontAwesomeIcon
                                      icon={faCheckSquare}
                                      color='deepskyblue'
                                    />
                                  )}
                                  {issueList.type?.toLowerCase() ===
                                    'story' && (
                                    <FontAwesomeIcon
                                      icon={faBook}
                                      color='green'
                                    />
                                  )}
                                  {issueList.type?.toLowerCase() === 'bug' && (
                                    <FontAwesomeIcon
                                      icon={faExclamationCircle}
                                      color='red'
                                    />
                                  )}
                                  {issueList.priority > 2 ? (
                                    <FontAwesomeIcon
                                      icon={faUpLong}
                                      color='red'
                                    />
                                  ) : (
                                    <FontAwesomeIcon
                                      icon={faDownLong}
                                      color='green'
                                    />
                                  )}
                                </div>
                                <div className='flex justify-end gap-2'>
                                  {renderIssueUsers(issueList)}
                                </div>
                              </div>
                            </div>
                          )}
                        </Draggable>
                      )
                  )}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
      {
        <ModalComponent
          issueData={modelData.id}
          show={modelData.isModelOpen}
          close={() => {
            setModalData({ id: '', isModelOpen: false });
          }}
        />
      }
    </>
  );
}

export default IssueList;
