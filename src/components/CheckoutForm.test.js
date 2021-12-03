import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
  // Arrange
  render (<CheckoutForm />);

});

test("shows success message on submit with form details", async () => {
  // Arrange
  render (<CheckoutForm />);

  // Act
  const firstNameField = screen.getByLabelText(/first name:/i);
  const lastNameField = screen.getByLabelText(/last name:/i);
  const addressField = screen.getByLabelText(/address:/i);
  const cityField = screen.getByLabelText(/city:/i);
  const stateField = screen.getByLabelText(/state:/i);
  const zipField = screen.getByLabelText(/zip:/i);

  const checkoutButton = screen.getByRole("button");

  userEvent.type(firstNameField, "Benjamin");
  userEvent.type(lastNameField, "Craddock");
  userEvent.type(addressField, "1 BloomTech Lane");
  userEvent.type(cityField, "LambdaLand");
  userEvent.type(stateField, "LambdaVerse");
  userEvent.type(zipField, "77777");

  userEvent.click(checkoutButton);

  // Assert
  const successMessage = await screen.findByText(/you have ordered some plants! woo-hoo!/i);
  expect(successMessage).toBeInTheDocument();

});
