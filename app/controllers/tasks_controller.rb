class TasksController < ApplicationController
  def index
    render json: Task.all
  end

  def show
    task = Task.find(params[:id])
    render json: task
  end
end
