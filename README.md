## 🧩 Kanban Board - A React Task Management App

A Kanban-style task management application built with React that allows users to create, Edit & Delete task and move tasks across customizable columns like "To Do", "In Progress", and "Done". It features drag-and-drop interaction, state management via Context API, and persistent local storage.

---

## 🚀 Features:

## 🔧 Core Functionality:-

**📋 Three Task Columns**

 - To Do, In Progress, and Done

**🎯 Add/Edit/Delete Tasks**

- Includes title, description, status, and priority

- Optional: tags and deadlines

**🧲 Drag and Drop Support**

- Move tasks between columns

- Persist order and status after drop

**📦 Persistent Data**

- Tasks stored in localStorage — survive browser refreshes

**🔍 Task Modal**

- Click on task to open full details in a modal

- Inline editing of description, status, and more

**📱 Responsive Design**

- Built using TailwindCSS for seamless usage on any device

---

## 🛠️ Tech Stack:-

|**Tech**                       |**Description**                                                         |    ------------------------------- | -----------------------------------------------------------------------|
| **React JS**                  | Frontend framework                                                     |
| **TailwindCSS**               | Utility-first CSS styling                                              |
| **React Hooks**               | State and lifecycle management (`useState`, `useEffect`, `useContext`) |
| **Context API**               | Global state management for tasks                                      |
| **react-beautiful-dnd**       | Drag-and-drop support                                                  |
| **localStorage**              | Local persistence of task data                                         |

---

## ✨ Usage:-

**➕ Adding a Task**

- Fill in:

- Title (required)

- Description

- Choose Priority (High / Medium / Low)

- Choose Initial Status (To Do / In Progress / Done)

- Click "Add Task" button

**✏️ Editing / Deleting a Task**

- Click Edit button from the task card to open the task details modal.

- Edit fields directly in the task details modal.

- Click Delete button from the task card to delete the task entirely.

**🔄 Drag and Drop**

- Drag task cards between columns.

- Changes are saved to localStorage automatically.

---

## 🧠 State Management:-

- All task data is managed using React Context API to ensure a centralized global state, and localStorage is used to persist tasks.

- TaskContext provides:

    - Task list

    - Create, edit, delete, and move task functions.

    - Local updates are mirrored in the UI and stored locally.

## 🎨 Styling:-

- Built using TailwindCSS.

- Fully responsive and mobile-friendly.

- Customize colors, spacing, and layout via tailwind.config.js.

---

## ✅ Future Enhancements (Optional):-

- 🔔 Notifications or Toasts for task actions.

- 🔄 Sync with Backend/API

- 👥 User Authentication

- 📅 Calendar View

- 🔍 Search and Filter by tags or priority.

---

## 🙋‍♂️ Author & Contact:-

- Developed by: Vignesh R

- GitHub: @VigneshRav

- Email: vignesh212000@gmail.com

---
