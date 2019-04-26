class TasksController < ApplicationController
  def index
    render json: Task.all
  end

  def show
    task = Task.find(params[:id])
    render json: task
  end

  def create
    task = params[:task]
    render json: task, status: 201
  end
end
