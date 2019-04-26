class TasksController < ApplicationController
  def index
    render json: Task.all
  end

  def show
    task = Task.find(params[:id])
    render json: task
  end

  def create
    task = Task.create task_params.except(:prerequisite_ids)
    task.update prerequisite_ids: task_params[:prerequisite_ids]
    render json: task, status: 201
  end
  
  def update
    task = Task.find params[:id]
    task.update task_params
    task.update prerequisite_ids: task_params[:prerequisite_ids]
    render json: task, status: 201
  end
  
end

def task_params
  params.require(:task).permit :name, :description, :completed, prerequisite_ids: []
end