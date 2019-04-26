class TasksController < ApplicationController
  def index
    render json: Task.all
  end

  def show
    task = Task.find(params[:id])
    render json: task
  end

  def create
    task = Task.create name: task_params[:name], description: task_params[:description], completed: task_params[:completed]
    task.update prerequisite_ids: task_params[:prerequisite_ids]
    # binding.pry
    render json: task, status: 201
  end
  
  def update
    task = Task.find params[:id]
    # binding.pry
    task.update task_params
    task.update prerequisite_ids: task_params[:prerequisite_ids]
    render json: task, status: 201
  end
  
end

def task_params
  params.require(:task).permit :name, :description, :completed, prerequisite_ids: []
end