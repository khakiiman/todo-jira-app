// imported packages
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

// imported icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckSquare,
  faBook,
  faExclamationCircle,
  faUpLong,
  faDownLong,
} from '@fortawesome/free-solid-svg-icons';

// imported components
import ModalComponent from '../Modal';

// imported store files
import { sortDragData } from '../../store/kanbanSlice';
import { RootState } from '../../store/store';

// imported models
import type { Issue } from '../../models/Issue';

// types
enum IssueStatusCopy {
  BACKLOG = 'Backlog',
  SELECTED = 'Development',
  INPROGRESS = 'In progress',
  DONE = 'Done',
}
interface ModalData {
  issueData: Issue;
  isModalOpen: boolean;
}

function IssueList() {
  const dispatch = useDispatch();
  const kanbanState = useSelector((state: RootState) => state.kanban);
  const [modalData, setModalData] = useState<ModalData>({
    issueData: {
      id: Number(''),
      type: '',
      reporter: '',
      assignee: '',
      priority: '',
      description: '',
      title: '',
      status: 'backlog',
      userIds: [],
    },
    isModalOpen: false,
  });

  const listOfIssues = kanbanState.issue.filter((issue: Issue) =>
    issue.title.toLowerCase().includes(kanbanState.searchTerm.toLowerCase())
  );

  const renderIssueUsers = (issueList: Issue) => {
    if (!issueList.userIds) {
      return;
    }
    return kanbanState.user.map(
      (user) =>
        issueList.userIds.includes(user.id) && (
          <img
            className='flex w-8 rounded-full'
            src={user.avatarUrl}
            alt=''
            key={user.id}
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
                  className='w-full bg-gray-700 m-2 p-3 rounded-lg'
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  <h5 className='text-slate-100 dark:text-slate-100 font-bold tracking-wide mb-4 text-center uppercase'>
                    {IssueStatusCopy[issue as keyof typeof IssueStatusCopy]}
                  </h5>

                  {listOfIssues.map(
                    (issueList: Issue) =>
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
                              className='flex flex-col bg-slate-100 dark:bg-slate-900 p-4 rounded-lg mb-[0.5rem]'
                              key={issueList.id}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              ref={provided.innerRef}
                              onClick={() => {
                                setModalData({
                                  issueData: issueList,
                                  isModalOpen: true,
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
                                  {Number(issueList.priority) > 2 ? (
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
          issueData={modalData.issueData}
          show={modalData.isModalOpen}
          close={() => {
            setModalData({ ...modalData, isModalOpen: false });
          }}
        />
      }
    </>
  );
}

export default IssueList;
