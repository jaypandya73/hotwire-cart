class CartController < ApplicationController

  def index
    @products = Product.order(lowest_price: :asc)
  end

  def fetch_products
    @product = Product.find(params[:id])
    respond_to do |format|
      format.html { render "nabp", locals: { product: @product }, layout: false }
      # format.turbo_stream
    end
  end

  def items
    # @players = Player.all.order(id: :desc)
    # sleep 1.5
    items = LineItem.order(id: :desc)
    p params
    respond_to do |format|
      format.html { render params[:tab], locals: { items: items }, layout: false }
      # format.turbo_stream
    end
  end

  def update_item
    @item = LineItem.find(params[:id])
    new_qty = params['line_item']['qty'].to_i
    @item.update(qty: new_qty)
    respond_to do |format|
      # format.html
      format.turbo_stream
    end
  end

  def shipping
    sleep 1.5
    respond_to do |format|
      format.html { render 'shipping', layout: false }
    end
  end
end
